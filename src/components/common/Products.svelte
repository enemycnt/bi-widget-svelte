<script lang="ts">
  import { onMount } from "svelte";

  import {
    products,
    productsLoad,
    wsConnect,
    wsDisconnect,
  } from "../../store/products";

  import Loader from "./Loader.svelte";
  import FilterBar from "../filters/FilterBar.svelte";
  import Categories from "../filters/Categories.svelte";
  import Table from "../grid/Table.svelte";
  import BottomPanel from "./BottomPanel.svelte";

  onMount(() => {
    productsLoad().then(() => {
      wsConnect();
    });
    return () => {
      wsDisconnect();
    };
  });
</script>

{#if $products.loading}
  <Loader />
{/if}
{#if $products.error}
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
    <Table />
  </div>
  <BottomPanel />
{/if}

<style type="text/scss">
  .ProductsWrap {
    width: 100%;
    font-size: 14px;
    color: #75808e;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .Header {
    position: sticky;
    top: 0;
    background: #fff;
    padding: 0;
    z-index: 1;
  }

  .ErrorData {
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    flex-grow: 1;
  }
</style>
