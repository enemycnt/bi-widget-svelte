<script lang="ts">
  import { products, wsConnect, wsDisconnect } from "../../store/products";
</script>

{#if $products.socketEstablished}
  <div class="BottomPanel">
    {#if $products.socketOpen}
      <button
        type="button"
        class="Button"
        class:primary={true}
        on:click={() => wsDisconnect()}
      >
        Disconnect WebSocket
      </button>
    {:else}
      <button
        type="button"
        class="Button"
        class:primary={false}
        on:click={() => wsConnect()}
      >
        Reconnect WebSocket
      </button>
    {/if}
  </div>
{/if}

<style type="text/scss">
  .BottomPanel {
    bottom: 0;
    position: sticky;
    background: #fff;
    display: flex;
    justify-content: center;
  }
  .Button {
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
      background: palevioletred;
    }
  }
</style>
