
<style type="text/scss">
  .ColoredWrap {
    padding: 5px 0;
    text-align: right;
    color: red;
    &.plus {
      color: green;
    }
  }
</style>

<script>
  export let item;
  const value = ((item.o - item.c) / item.o)
  const sign = Math.sign(value) === 1 ? '+' : '–'
  const formattedValue = Math.abs(value).toFixed(2)
  const formattedString = isFinite(value) ?`${sign}${formattedValue}%` : '0%'
</script>

<div class="ColoredWrap" class:plus={sign === "+"}>
  {formattedString}
</div>