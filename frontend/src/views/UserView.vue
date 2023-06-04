<script setup>
  import {ref, onMounted} from "vue"
  import api from "../utils/api"
  import Header from "../components/Header/Header.vue";

  const userDetails = ref({}) 
  const loading = ref(false)

  const props = defineProps(['id'])

  const data = new Date(Date(userDetails.created_at)).toLocaleDateString("en-GB")
  const hora = new Date(Date(userDetails.created_at)).toLocaleTimeString("en-GB")
  const formattedDate = data + " às " + hora

  onMounted(async () => {
    loading.value = true
    await api.get(
      '/users/' + Number(props.id)
    ).then(
      (res) => {
        userDetails.value = res.data
        loading.value = false
      }
    )
  })

</script>

<template>
  <div>
    <Header></Header>
    <main>
      <h1>Usuário Nº{{ props.id }}</h1>
      <h2>Visualize as informações do usuário solicitado abaixo.</h2>
      <div v-if="!loading" class="table-container">
        <table aria-describedby="users table">
          <tr>
            <th :id="props.id">Nome:</th>
            <td>{{ userDetails.name }}</td>
          </tr>
          <tr>
            <th :id="props.id">E-mail:</th>
            <td>{{ userDetails.email }}</td>
          </tr>
          <tr>
            <th :id="props.id">Nível de acesso:</th>
            <td>{{ String(userDetails.role) === "admin" ? "Admin" : "Membro" }}</td>
          </tr>
          <tr>
            <th :id="props.id">Status:</th>
            <td>{{ userDetails.active ? 'Ativo' : 'Inativo'}}</td>
          </tr>
          <tr>
            <th :id="props.id">Data de cadastro:</th>
            <td>{{ formattedDate }}</td>
          </tr>
        </table>
      </div>
      <div v-if="loading">
        <h2>Carregando....</h2>
      </div>
      <div class="footer">
        <router-link :to="{ path: '/'}" class="footer-link">Voltar à lista</router-link>
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
    margin-top: 4%;
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
    padding: 2% 3%;
  }
  th {
    font-weight: 600;
  }

  .footer {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 5%;
  }
  
  .footer-link {
    color: rgb(26, 26, 26);
    font-weight: 700;
  }

</style>