<script lang="ts">
  import DropDownCategory from "./DropDownCategory.svelte";
  import {
    products,
    selectedCategory,
    toggleStarred,
  } from "../../store/products";
  import DropdownList from "./DropdownList.svelte";

  $: menuLabels = Object.keys($products.parentCategories);
  $: firstMenus = menuLabels
    .filter((key) => $products.parentCategories[key].length === 1)
    .sort((a, b) => a.localeCompare(b));

  $: secondMenus = menuLabels.filter(
    (key) => $products.parentCategories[key].length > 1
  );

  let dropdownMarket: null | string;
  let hasDropdown = true;
  let dropdownTop = 0,
    dropdownLeft = 0;
  const showDropdown =
    (selectedMarket: string) => (top: number, left: number) => {
      console.log("mouse", selectedMarket);
      console.log("top", top, "left", left);
      dropdownTop = top;
      dropdownLeft = left;
      dropdownMarket = selectedMarket;
      hasDropdown = true;
    };
  const hideDropdown = () => {
    dropdownMarket = null;
    hasDropdown = false;
  };
</script>

<div class="CategoriesWrap">
  <button
    type="button"
    class="Category"
    data-testid="starred-category"
    class:active={$products.selectedParentMarket === "starred"}
    on:click={() => toggleStarred()}
  >
    ★
  </button>
  {#each firstMenus as category}
    <button
      type="button"
      class="Category"
      data-testid="simple-category"
      on:click={() =>
        selectedCategory({
          category,
          parentMarket: category,
        })}
      class:active={$products.selectedParentMarket === category}
    >
      {category}
    </button>
  {/each}
  {#each secondMenus as market}
    <DropDownCategory
      onFocusIn={showDropdown(market)}
      active={$products.selectedParentMarket === market}
      marketCategory={market}
    >
      {market}
      <div class="TriangleDown" />
    </DropDownCategory>
  {/each}
</div>

{#if hasDropdown && dropdownMarket}
  <DropdownList
    market={dropdownMarket}
    onFocusOut={hideDropdown}
    {dropdownTop}
    {dropdownLeft}
  />
{/if}

<style type="text/scss">
  .CategoriesWrap {
    margin-top: 10px;
    padding: 2px;
    gap: 2px;
    display: flex;
    justify-content: space-between;
    color: #75808e;
    font-size: 14px;
    position: relative;
    overflow-x: auto;
    width: inherit;
    scrollbar-width: thin;
  }

  .Category {
    display: flex;
    align-items: center;
    padding: 5px;
    background: white;
    border-radius: 3px;
    color: #75808e;
    cursor: pointer;
    border: none;
    &.active {
      background: #f2f2f2;
      color: #464d57;
    }
  }

  .TriangleDown {
    margin-left: 2px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #75808e;
  }
</style>
