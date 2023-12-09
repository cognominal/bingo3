<script lang="ts">
    export let data;
	import { SplitPane } from '@rich_harris/svelte-split-pane';
    const dividerColor = 'black';
  const dividerThickness = '20px';
  
</script>

<SplitPane type="horizontal"  min="25%" max="50%" pos="50%" --color={dividerColor}
--thickness={dividerThickness} 
>
    <div slot="a">
        <section>Left</section>
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