import { type } from "os"

export type User = {
    firstName: string
    lastName: string
    phoneNumber: string
    avatar: string
    id: number
}


export type ConversationType = {
    userId: number
    participantId: number
    id: number
}

export type MessageType = {
    userId: number,
    messageText: string,
    conversationId: number,
    id: number
}

export type CurrentConversation = {
    userId: number,
    participantId: number,
    id: number,
    messages: MessageType[]
}

export type FormType = HTMLFormElement & {
    text: HTMLInputElement
    reset: () => void
}