<style type="text/scss">
  .ProductsWrap{
    width: 100%;
    font-size: 14px;
    color: #75808e;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .Header{
    position: sticky;
    top: 0;
    background: #fff;
    padding: 0;
    z-index: 1;
  }

  .ErrorData{
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    flex-grow: 1;
  }

</style>

<script>
    import { readable, derived } from 'svelte/store';
    import { createEventDispatcher, onMount } from "svelte";
    import { useStoreon } from "@storeon/svelte";

    const { dispatch, products } = useStoreon("products");

    import Loader from "./Loader.svelte"
    import FilterBar from "../filters/FilterBar.svelte"
    import Categories from "../filters/Categories.svelte"
    import Table from "../grid/Table.svelte"
    import BottomPanel from "./BottomPanel.svelte"
    $: showedArray = $products.selectedParentMarket === 'starred' ? 'starredData' : 'filteredData'; 
    $: showedArray = $products.searchQuery.length > 0 ? 'searchedData' : showedArray; 
    onMount(async () => {
      dispatch("products/load");
    });
</script>

{#if $products.loading}
  <Loader />
{/if}
{#if $products.error }
  <div class="ErrorData">
    {$products.error.message}
  </div>
{/if}
{#if $products.loaded}
  <div class="Header">
    <Categories />
    <FilterBar />
  </div>
  <div class="ProductsWrap">
    <Table products={products} />
  </div>
  <BottomPanel products={products} />
{/if}

<!-- <table>
  {#each $products[showedArray] as item (item.s)}
    <tr>
      <td>{item.b}/{item.q}</td>
      <td>{item.c.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 9,
      })}</td>
      <td>{((item.o - item.c) / item.o).toFixed(2)}</td>
    </tr>
  {/each}
</table> -->
