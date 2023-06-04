<script setup>
  import {ref, onMounted} from "vue"
  import api from "../utils/api"
  import Header from "../components/Header/Header.vue";

  const usersList = ref([])
  const loading = ref(false)

  onMounted(async () => {
    loading.value = true
    await api.get(
      '/users'
    ).then(
      (res) => {
        usersList.value = res.data
        loading.value = false
      }
    )
  })
</script>
  
<template>
  <div>
    <Header></Header>
    <main>
      <h1>Listagem de Usuários</h1>
      <h2>Visualize os usuários que acessam sua plataforma.</h2>
      <div class="table-container">
        <table aria-describedby="users table">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Nível de acesso</th>
            <th></th>
          </tr>
          <tr v-for="user in usersList">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ String(user.role) === "admin" ? "Admin" : "Membro" }}</td>
            <td><router-link :to="{ path: '/user/' + String(user.id)}" class="button">Visualizar</router-link></td>
          </tr>
        </table>
      </div>
    </main>
  </div>
</template>
  
<style scoped>

  main {
    margin: 3% 10% 0 10%;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 0.9rem;
    margin-top: 2%;
    font-weight: normal;
    color: #2c2c2c;
  }

  .table-container {
    width: 100%;
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    margin: 4% 0;
    overflow: hidden;
  }

  table {
    width: 100%;
    text-align: left;
    border: 1px solid transparent;
    border-radius: 8px;
    overflow: hidden;
    font-size: 0.9rem;
  }

  tr {
    border: 1px solid #e4e4e4;
  }

  td, th {
    padding: 1.4% 2%;
    font-weight: 500;
  }
  th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  td:nth-child(n + 2) {
    color: #4b4646;
  }

  td:nth-of-type(1), th:nth-of-type(1) {
    padding: 0 40px;
  }

  .button {
    text-decoration: none;
    color: #b09e71;
    font-weight: 700;
  }

  .button:hover {
    text-decoration: underline;
  }

</style>
