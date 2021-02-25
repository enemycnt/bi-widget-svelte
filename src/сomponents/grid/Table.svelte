<style type="text/scss"> 
  .TableWrap{
    width: 100%;
    display: grid;
    grid-template-columns: 40% 1fr 1fr;
    font-size: 12px;
  }

  .TableHeader{
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
  .NoData{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
  }
</style>

<script>
  export let products;
  import VirtualList from '@sveltejs/svelte-virtual-list';
  import TableRow from "./TableRow.svelte"
  // let showedArray = 'filteredData'
   $: showedArray = $products.selectedParentMarket === 'starred' ? 'starredData' : 'filteredData'; 
   $: showedArray = $products.searchQuery.length > 0 ? 'searchedData' : showedArray; 
</script>

{#if $products[showedArray].length > 0}
  <div class="TableWrap">
    <div class="TableHeader">Pair</div>
    <div class="TableHeader">Last Price</div>
    {#if $products.changeOrVolume === "change"}
      <div class="TableHeader" class:right={true}>Change</div>
    {:else}
      <div class="TableHeader" class:right={true}>Volume</div>
    {/if}
  </div>
  <!-- {#each $products[showedArray] as item }
    <TableRow
    item={item}
    />
  {/each} -->

  <div class='container'>
    <VirtualList
      itemHeight={25}
      items={$products[showedArray]}
      let:item
    >
      <TableRow
        item={item}
      />
    </VirtualList>
  </div>
{:else}
  <div class="NoData">
    <span>NO DATA</span>
  </div>
{/if}


