export const customerResponseSchema = {
    type: 'object',
    properties: {
        data: {
            type: 'object',
            properties: {
                id: { type: 'string' },
            },
            required: ['id'],
            additionalProperties: false,
        },
    },
};
