<style>
  .Wrapper {
    width: 313px;
    background: #FFF;
    padding: 20px 10px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    min-height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .Title {
    margin: 0;
    padding-bottom: 5px;
    border-bottom: 1px solid #eaecef;
    font-weight: bold;
    font-size: 16px;
  }
</style>


<div class="Wrapper">
  <div class="Title">Market</div>
  <slot></slot>
</div>
