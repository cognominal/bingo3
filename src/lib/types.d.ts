import type { EditorState } from '@codemirror/state';
import { OutputChunk, RollupError } from '@rollup/browser';
import type { Readable, Writable } from 'svelte/store';
import type { CompileOptions, CompileError } from 'svelte/compiler';

export type Lang = 'js' | 'svelte' | 'json' | 'md' | 'css' | (string & Record<never, never>);

type StartOrEnd = {
	line: number;
	column: number;
	character: number;
};

export type MessageDetails = {
	start: StartOrEnd;
	end: StartOrEnd;
	filename: string;
	message: string;
};

export type Warning = MessageDetails;

export type Bundle = {
	uid: number;
	client: OutputChunk | null;
	error: (RollupError & CompileError) | null;
	server: OutputChunk | null;
	imports: string[];
	warnings: Warning[];
};

export type File = {
	name: string;
	source: string;
	type: Lang;
	modified?: boolean;
};

export type ReplState = {
	cursor_pos: number;
	module_editor: import('./CodeMirror.svelte').default | null;
	// files: File[];
	// selected_name: string;
	// selected: File | null;
	// bundle: Bundle | null;
	// bundling: Promise<void>;
	// bundler: import('./Bundler').default | null;
	// compile_options: CompileOptions;
	// toggleable: boolean;
};

export type ReplContext = {
	cursor_pos: Writable<ReplState['cursor_pos']>;
	module_editor: Writable<ReplState['module_editor']>;
	// files: Writable<ReplState['files']>;
	// selected_name: Writable<ReplState['selected_name']>;
	// selected: Readable<ReplState['selected']>;
	// bundle: Writable<ReplState['bundle']>;
	// bundling: Writable<ReplState['bundling']>;
	// bundler: Writable<ReplState['bundler']>;
	// compile_options: Writable<ReplState['compile_options']>;
	// toggleable: Writable<ReplState['toggleable']>;

	// EDITOR_STATE_MAP: Map<string, EditorState>;

	// Methods
	// rebundle(): Promise<void>;
	// handle_select(filename: string): Promise<void>;
	// handle_change(
	// 	event: CustomEvent<{
	// 		value: string;
	// 	}>
	// ): Promise<void>;
	// go_to_warning_pos(item?: MessageDetails): Promise<void>;
	// clear_state(): void;
};
