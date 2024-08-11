<script lang="ts">
  import { onMount } from "svelte";
  import { products, selectedCategory } from "../../store/products";
  export let market, dropdownTop, dropdownLeft, onFocusOut;

  let dropdownList: HTMLDivElement;
  // adjustment because of parent
  $: top = `${dropdownTop - 20}px`;
  $: left = `${dropdownLeft - 10}px`;
  $: dropdownItems = $products.parentCategories[market];

  onMount(() => {
    dropdownList.focus();
  });
</script>

<div
  bind:this={dropdownList}
  tabindex="0"
  role="menu"
  class="DropdownList"
  on:mouseleave={onFocusOut}
  on:abort={onFocusOut}
  style:top
  style:left
>
  {#each dropdownItems as category}
    <button
      role="menuitem"
      type="button"
      class="DropdownItem"
      class:active={$products.selectedCategory === category}
      on:click={() =>
        selectedCategory({
          category,
          parentMarket: market,
        })}
    >
      {category}
    </button>
  {/each}
</div>

<style type="text/scss">
  .DropdownList {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    position: absolute;
    box-shadow: 0 0 2px #ccc;
    border-radius: 3px;
    z-index: 9999;
    gap: 2px;
    background: #fff;
  }
  .DropdownItem {
    border: none;
    padding: 5px;
    color: #75808e;
    font-weight: "normal";
    background: #fff;
    &:hover {
      background: #ccc;
    }
    &.active {
      color: #464d57;
      font-weight: bold;
    }
  }
</style>
