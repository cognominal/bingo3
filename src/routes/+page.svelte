<script lang="ts">
    // export let data;
	import { SplitPane } from '@rich_harris/svelte-split-pane';
    import  Editor  from '$lib/Editor.svelte';
    import { set_repl_context } from '$lib/context.js';
    import { writable } from 'svelte/store';
    const dividerColor = 'black';
  const dividerThickness = '20px';
  let autocomplete = false


  	/** @type {number} */
	let w;
	/** @type {number} */
	let h;

	let marked = false;

	let updating_externally = false;

	/** @type {import('@codemirror/state').Extension[]} */
	let extensions = [];

	// let cursor_pos = 0;
    /** @type {ReplContext['cursor_pos']} */
    const cursor_pos = writable(0);

    /** @type {ReplContext['module_editor']} */
    const module_editor = writable(null);


//   error={compiled?.result.error}
//   warnings={compiled?.result.warnings ?? []}


		// files,
		// selected_name,
		// selected,
		// bundle,
		// bundler,
		// bundling,
		// compile_options,
		// toggleable,

		// EDITOR_STATE_MAP,

		// rebundle,
		// clear_state,
		// go_to_warning_pos,
		// handle_select
        // handle_change,
        
        
        set_repl_context({
    module_editor,
    cursor_pos
	});

  
</script>

<SplitPane type="horizontal"  min="25%" max="50%" pos="50%" --color={dividerColor}
--thickness={dividerThickness} 
>
    <div slot="a">
        <Editor
        {autocomplete}
        />

    </div>
    <div slot="b">
        <section>Right</section>
    </div>
</SplitPane>

<style>
    section {
        padding: 1em;
        margin: 1em;
        border: 1px solid #ccc;
        border-radius: 3px;
        min-height: 200px; /* Set the minimum width here */

    }
</style>