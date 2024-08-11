<script lang="ts">
  export let active, marketCategory, onFocusIn;

  import { selectedCategory } from "../../store/products";

  let dropdownCategoryButton: HTMLButtonElement;
  function setDropdownPosition() {
    const rect = dropdownCategoryButton.getBoundingClientRect();
    console.log("rect", rect);
    const { top, left } = rect;
    return {
      top,
      left,
    };
  }
</script>

<button
  class="CategoryDropdown"
  type="button"
  class:active
  bind:this={dropdownCategoryButton}
  on:mouseenter={() => {
    const { top, left } = setDropdownPosition();
    onFocusIn(top, left);
  }}
  on:focusin={() => {
    const { top, left } = setDropdownPosition();
    onFocusIn(top, left);
  }}
  on:click={() =>
    selectedCategory({
      category: "",
      parentMarket: marketCategory,
    })}
>
  <div class="DropdownTitle">
    <slot></slot>
  </div>
</button>

<style type="text/scss">
  .CategoryDropdown {
    background: #fff;
    border-radius: 3px;
    color: #75808e;
    cursor: pointer;
    position: relative;
    z-index: 111;
    border: none;
    &.active {
      color: #464d57;
      background: #f2f2f2;
    }
  }
  .DropdownTitle {
    display: flex;
    align-items: center;
    padding: 5px;
  }
</style>
