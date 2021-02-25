
<style type="text/scss">

  .CustomLabel{
    font-size: 14px;
    color: #75808e;
    cursor: pointer;
    display: inline-block;
  }

  .CustomSearchbar{
    display: flex;
    align-items: center;
    width: 100%;
  }

  .FormWrap{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .SearchInput{
    padding: 5px 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid #eaecef;
    position: relative;
    width: 100%;
  }

  .CustomRadio{
    appearance: none;
    width: 12px;
    height: 12px;
    border: 1px solid darkgray;
    border-radius: 50%;
    outline: none;
    cursor: pointer;

    &:before {
      content: "";
      display: block;
      width: 60%;
      height: 60%;
      margin: 20% auto;
      border-radius: 50%;
    }
    &:checked:before {
      background: orange;
    }
  }

  .FilterBarWrap{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
</style>

<script>
  import { tick } from 'svelte';
  import { useStoreon } from "@storeon/svelte";
  const { dispatch, products } = useStoreon("products");

  let {changeOrVolume} = $products

  function handleSearchChange(event) {
    dispatch("products/search", event.target.value)

  }
</script>


<div class="FilterBarWrap">
  <div class="CustomSearchbar">
    <svg
      width="14"
      height="14"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 10.982c0 3.845 3.137 6.982 6.982 6.982 1.518 0 3.036-.506 4.149-1.416L18.583 21 20 19.583l-4.452-4.452c.81-1.113 1.416-2.631 1.416-4.149 0-1.922-.81-3.643-2.023-4.958C13.726 4.81 11.905 4 9.982 4 6.137 4 3 7.137 3 10.982zM13.423 7.44a4.819 4.819 0 011.416 3.441c0 1.315-.506 2.53-1.416 3.44a4.819 4.819 0 01-3.44 1.417 4.819 4.819 0 01-3.441-1.417c-1.012-.81-1.518-2.023-1.518-3.339 0-1.315.506-2.53 1.416-3.44.911-1.012 2.227-1.518 3.542-1.518 1.316 0 2.53.506 3.44 1.416z"
        fill="currentColor"
      ></path>
    </svg>

    <input
      data-testid="search-input"
      class="SearchInput"
      type="search"
      placeholder="Search"
      on:input={handleSearchChange}
    />
  </div>
  <form class="FormWrap">
    <div>
      <input 
        class="CustomRadio"
        type="radio"
        id="filterChange"
        name="filter"
        value="change"
        bind:group={changeOrVolume}
        on:change={(e) =>
          dispatch("products/selectedColumn", e.target.value)
        }
      />
      <label class="CustomLabel" for="filterChange">Change</label>
    </div>
    <div>
      <input 
        class="CustomRadio"
        type="radio"
        id="filterVolume"
        name="filter"
        value="volume"
        bind:group={changeOrVolume}
        on:change={(e) =>
          dispatch("products/selectedColumn", e.target.value)
        }
      />
      <label class="CustomLabel" for="filterVolume">Volume</label>
    </div>
  </form>
</div>