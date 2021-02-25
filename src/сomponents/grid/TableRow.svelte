<style type="text/scss">

  .TableCell{
    display: flex;
    align-items: center;
    padding: 5px 0;
  }

  .TableCellChangeVolume{
    padding: 5px 0;
    text-align: right;
  }

  .StarWrap{
    color: inherit;
    margin-right: 5px;
    cursor: pointer;
    &.active {
      color: orange;
    }
  }
  .TableRowFlex{
    width: 100%;
    display: grid;
    grid-template-columns: 40% 1fr 1fr;
    font-size: 12px;
  }
</style>

<script>
  export let item;
  import { useStoreon } from "@storeon/svelte";
  const { dispatch, products } = useStoreon("products");

  import ColoredPercent from './ColoredPercent.svelte'

</script>

<div class="TableRowFlex">
  <div class="TableCell" title={item.s}>
    <div class="StarWrap"
      class:active={$products.starredData.includes(item)}
      on:click={() => dispatch("products/addToStarred", item)}
    >
      ★
  </div>
    <span data-testid="product-name">
      {item.b}/{item.q}
    </span>
  </div>
  <div class="TableCell">
    {item.c.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 9,
    })}
  </div>

  {#if $products.changeOrVolume === "change"}
    <ColoredPercent item={item} />
  {:else}
    <div class="TableCellChangeVolume">
      {item.qv.toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })}
    </div>
  {/if}
</div>