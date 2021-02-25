<style type="text/scss">
  .BottomPanel{
    bottom: 0;
    position: sticky;
    background: #fff;
    display: flex;
    justify-content: center
  }
  .Button{
    background: green;
    color: white;
    font-size: 1em;
    margin-top: 1em;
    padding: 0.25em 1em;
    border: none;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    &.primary {
      background: palevioletred
    }
  }
</style>

<script>
  import { useStoreon } from "@storeon/svelte";
  const { dispatch, products } = useStoreon("products");

</script>

{#if $products.socketEstablished}
  <div class="BottomPanel">
    {#if $products.socketOpen }
      <div 
        class="Button"
        class:primary={true}
        on:click={() => dispatch("products/ws/disconnect")}
      >
        Disconnect WebSocket
  </div>
    {:else}
      <div 
      class="Button"
      class:primary={false}
      on:click={() => dispatch("products/ws/connect")}>
        Reconnect WebSocket
      </div>
    {/if}
  </div>
{/if}