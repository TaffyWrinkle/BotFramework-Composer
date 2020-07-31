import { Server } from 'restify';
import { BotFrameworkAdapter, ConversationState, UserState } from "botbuilder";
import { Claim } from 'botframework-connector';
import { ComposerBot } from './composerBot';
import { BotSettings } from "./settings";
export declare const getServerPort: () => any;
export declare const getProjectRoot: () => string;
export declare const getSettings: (projectRoot?: string) => BotSettings;
export declare const getRootDialog: (folderPath: string) => string;
export declare const getBotAdapter: (userState: UserState, conversationState: ConversationState) => BotFrameworkAdapter;
export declare const allowedSkillsClaimsValidator: (claims: Claim[]) => Promise<void>;
export declare const configureMessageEndpoint: (server: Server, adapter: BotFrameworkAdapter, bot: ComposerBot) => void;
export declare const configureSkillEndpoint: (server: Server, adapter: BotFrameworkAdapter, bot: ComposerBot) => void;