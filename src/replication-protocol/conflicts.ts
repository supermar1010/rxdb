import type {
    RxConflictHandler,
    RxConflictHandlerInput,
    RxConflictHandlerOutput,
    RxDocumentData,
    RxStorageInstanceReplicationState
} from '../types/index.d.ts';
import {
    getDefaultRevision,
    createRevision,
    now,
    flatClone,
    deepEqual
} from '../plugins/utils/index.ts';
import { stripAttachmentsDataFromDocument } from '../rx-storage-helper.ts';

export const defaultConflictHandler: RxConflictHandler<any> = {
    isEqual(a, b) {
        /**
         * If the documents are deep equal,
         * we have no conflict.
         * On your custom conflict handler you might only
         * check some properties, like the updatedAt time,
         * for better performance, because deepEqual is expensive.
         */
        return deepEqual(
            stripAttachmentsDataFromDocument(a),
            stripAttachmentsDataFromDocument(b)
        );
    },
    async resolve(i) {
        /**
         * The default conflict handler will always
         * drop the fork state and use the master state instead.
         */
        return i.realMasterState;
    }
};



/**
 * Resolves a conflict error or determines that the given document states are equal.
 * Returns the resolved document that must be written to the fork.
 * Then the new document state can be pushed upstream.
 * If document is not in conflict, returns undefined.
 * If error is non-409, it throws an error.
 * Conflicts are only solved in the upstream, never in the downstream.
 */
export async function resolveConflictError<RxDocType>(
    state: RxStorageInstanceReplicationState<RxDocType>,
    input: RxConflictHandlerInput<RxDocType>,
    forkState: RxDocumentData<RxDocType>
): Promise<RxDocumentData<RxDocType> | undefined> {
    const conflictHandler: RxConflictHandler<RxDocType> = state.input.conflictHandler;

    const isEqual = conflictHandler.isEqual(input.realMasterState, input.newDocumentState, 'replication-resolve-conflict');

    if (isEqual) {
        /**
         * Documents are equal,
         * so this is not a conflict -> do nothing.
         */
        return undefined;
    } else {
        const resolved = await conflictHandler.resolve(input, 'replication-resolve-conflict');
        /**
         * We have a resolved conflict,
         * use the resolved document data.
         */
        const resolvedDoc: RxDocumentData<RxDocType> = Object.assign(
            {},
            resolved,
            {
                /**
                 * Because the resolved conflict is written to the fork,
                 * we have to keep/update the forks _meta data, not the masters.
                 */
                _meta: flatClone(forkState._meta),
                _rev: getDefaultRevision(),
                _attachments: flatClone(forkState._attachments)
            }
        ) as any;
        resolvedDoc._meta.lwt = now();
        resolvedDoc._rev = createRevision(
            await state.checkpointKey,
            forkState
        );
        return resolvedDoc;
    }
}
