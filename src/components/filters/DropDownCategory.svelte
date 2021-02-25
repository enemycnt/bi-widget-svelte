
<style type="text/scss">
  .CategoryDropdown{
    background: #FFF;
    border-radius: 3px;
    color: #75808e;
    cursor: pointer;
    position: relative;
    z-index: 111;
    &.active {
      color: #464d57;
      background: #f2f2f2;
    }

  }
  .DropdownTitle{
    display: flex;
    align-items: center;
    padding: 5px;
  }

  .DropdownList{
    display: flex;
    flex-direction: column;
    margin-top: 0;
    width: 100%;
    position: absolute;
    box-shadow: 0 0 2px #ccc;
    border-radius: 3px;
    z-index: 9999;
  }
  .DropdownItem{
    padding: 5px;
    color:  "#75808e";
    font-weight: "normal";
    background: #fff;
    &:hover {
      background: #ccc;
    }
    &.active {
      color: #464d57;
      font-weight: bold
    }
  }
</style>

<script>
  export let active, dropdownItems, marketCategory, products;
  import { useStoreon } from "@storeon/svelte";

  const { dispatch } = useStoreon("products");
  // const [show, setShow] = useState(false);
  let show = false;
  const showDropdown = (e) => {
    show = true
  };
  const hideDropdown = (e) => {
    show = false
  };
</script>

<div 
  class="CategoryDropdown"
  on:mouseenter={showDropdown}
  on:mouseleave={hideDropdown}
  class:active={active}
>
  <div
    on:click={() =>
      dispatch("products/selectedCategory", {
        category: "",
        parentMarket: marketCategory,
      })
    }
  >
    <div class="DropdownTitle">
      <slot></slot>
    </div>
  </div>
  {#if show}
    <div class="DropdownList">
      {#each dropdownItems as category}
        <div
          class="DropdownItem"
          class:active={products.selectedCategory === category}
          on:click={() =>
            dispatch("products/selectedCategory", {
              category,
              parentMarket: marketCategory,
            })
          }
        >
          {category}
        </div>
      {/each}
    </div>
  {/if}
</div>