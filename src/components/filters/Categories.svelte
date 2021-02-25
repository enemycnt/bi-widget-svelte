<style type="text/scss">
  .CategoriesWrap{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    color: #75808e;
    font-size: 14px;
  }

  .Category{
    display: flex;
    align-items: center;
    padding: 5px;
    background: white;
    border-radius: 3px;
    color: #75808e;
    cursor: pointer;
    &.active {
      background: #f2f2f2;
      color: #464d57;
    }
  }

  .TriangleDown{
    margin-left: 2px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #75808e;
  }

</style>

<script>
  import { useStoreon } from "@storeon/svelte";
  import DropDownCategory from './DropDownCategory.svelte'

  const { dispatch, products } = useStoreon("products");

  $: menuLabels = Object.keys($products.parentCategories);
  $: firstMenus = menuLabels
    .filter((key) => $products.parentCategories[key].length === 1)
    .sort((a, b) => a.localeCompare(b));

  $: secondMenus = menuLabels.filter(
    (key) => $products.parentCategories[key].length > 1
  );
</script>

<div class="CategoriesWrap">
  <div 
    class="Category"
    data-testid="starred-category"
    class:active={$products.selectedParentMarket === "starred"}
    on:click={() => dispatch("products/toggleStarred")}
  >
    ★
</div>
  {#each firstMenus as category}
    <div 
      class="Category"
      data-testid="simple-category"
      on:click={() =>
        dispatch("products/selectedCategory", {
          category,
          parentMarket: category,
        })
      }
      class:active={$products.selectedParentMarket === category}
    >
      {category}
    </div>
  {/each}
  {#each secondMenus as market}
    <DropDownCategory
      active={$products.selectedParentMarket === market}
      dropdownItems={$products.parentCategories[market]}
      marketCategory={market}
      products={$products}
    >
      {market}
      <div class="TriangleDown" />
    </DropDownCategory>
  {/each}
</div>