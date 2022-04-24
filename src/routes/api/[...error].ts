import type { RequestHandler } from '../../index';

export const get: RequestHandler = async () => {
    return {
        body: {
            status: 404,
            message: 'Not Found',
        },
        status: 404,
    };
};
