<script lang="ts">
  import { products } from "../../store/products";
  import VirtualList from "@sveltejs/svelte-virtual-list";
  import TableRow from "./TableRow.svelte";
  import type { Product } from "storeTypes";
  let showedArray: keyof Product & string = "filteredData";
  $: showedArray =
    $products.selectedParentMarket === "starred"
      ? "starredData"
      : "filteredData";
  $: showedArray =
    $products.searchQuery.length > 0 ? "searchedData" : showedArray;
</script>

{#if $products[showedArray]}
  <div class="TableWrap">
    <div class="TableHeader">Pair</div>
    <div class="TableHeader">Last Price</div>
    {#if $products.changeOrVolume === "change"}
      <div class="TableHeader" class:right={true}>Change</div>
    {:else}
      <div class="TableHeader" class:right={true}>Volume</div>
    {/if}
  </div>

  <div class="container">
    <VirtualList itemHeight={25} items={$products[showedArray]} let:item>
      <TableRow {item} />
    </VirtualList>
  </div>
{:else}
  <div class="NoData">
    <span>NO DATA</span>
  </div>
{/if}

<style type="text/scss">
  .TableWrap {
    width: 100%;
    display: grid;
    grid-template-columns: 40% 1fr 1fr;
    font-size: 12px;
  }

  .TableHeader {
    position: sticky;
    top: 75px;
    text-align: left;
    font-weight: bold;
    padding: 5px 0;
    background: #fff;
    &.right {
      text-align: right;
    }
  }
  .container {
    min-height: 200px;
    height: calc(100vh - 15em);
  }
  .NoData {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
