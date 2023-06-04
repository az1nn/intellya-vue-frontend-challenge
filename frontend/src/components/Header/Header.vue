<template>
  <header>
    <div class="left-header">
      <img src="../../assets/logo.png" alt="logo" class="logo" />
      <div class="tab">
        <p class="tab-link">Usuário</p>
      </div>
    </div>
    <form class="search">
      <input class="search" type="search" placeholder="Buscar...">
    </form>
  </header>
</template>
  
<style scoped>

  header {
    border-bottom: 2px solid rgba(196, 196, 196, 0.493);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.055);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .left-header {
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10%;
  }

  .logo {
    width: 14%;
    height: 36%; 
    @media (min-width: 1440px) {
      width: 160px;
      height: 40px;
    }
  }

  .tab {
    margin-left: 3%;
    padding: 20px 10px;
    border-bottom: 2px solid #E4CA85;
    font-weight: 600;
    font-size: 0.9rem;
  }
  form.search {
    border: none;
    padding: 0;
    margin-right: 10%;
  }

  input.search {
    width: 260px;
    border: 1px solid #bebebe;
    border-radius: 8px;
    display: block;
    padding: 9px 4px 9px 40px;
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgb(199, 199, 199)' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
  }

</style>