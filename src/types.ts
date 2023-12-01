type TInterfaces = Record<string, string>

type TMeta = {
    locale: string;
    timezone: string;
    client_id: string;
    interfaces: TInterfaces;
}

type TMarkup = {
    dangerous_context: boolean;
}

type TEntity = {
    start: number;
    end: number;
    type: string;
    value: Record<string, string> | number;
}

type TNlu = {
    tokens: Array<string>;
    entities: Array<TEntity>;
}

type TRequestSimpleUtterance = {
    type: string;
    command: string;
    original_utterance: string;
    markup: TMarkup;
    nlu: TNlu;
    tokens: Record<string, number>;
}

type TUser = {
    user_id: string;
    access_token: string;
}

type TApplication = {
    application_id: string;
}

type TState = {
    session: Record<string, number>;
    user: Record<string, number>;
    application: Record<string, number>;
}

type TSession = {
    session_id: string;
    message_id: number;
    skill_id: string;
    user_id: string;
    user: TUser;
    application: TApplication;
    new: boolean;
}

export type TUserRequest = {
    meta: TMeta;
    request: TRequestSimpleUtterance;
    session: TSession;
    state: TState;
    version: string;
}