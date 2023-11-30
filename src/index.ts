export const handler: Record<string, any> = (event: any) => {
    const { version, session, request } = event;

    let text = 'Привет! Я повторю все, что вы мне скажите.';
    if (request['original_utterance'].length > 0)
        text = request['original_utterance'];
    return {
        version,
        session,
        response: {
            // Respond with the original request or welcome the user if this is the beginning of the dialog and the request has not yet been made.
            text: text,

            // Don't finish the session after this response.
            end_session: false,
        },
    };
};
