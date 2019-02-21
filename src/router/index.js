import Vue from 'vue'
import Router from 'vue-router'
import Siswa from '@/components/Siswa'
import Kelas from '@/components/Kelas'
import TambahKelas from '@/components/TambahKelas'
import TambahSiswa from '@/components/TambahSiswa'

// Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/siswa',
      name: 'Siswa',
      component: Siswa
    },
    {
      path: '/kelas',
      name: 'Kelas',
      component: Kelas
    },
    {
      path: '/kelas/tambah',
      name: 'TambahKelas',
      component: TambahKelas
    },
    {
      path: '/siswa/tambah',
      name: 'TambahSiswa',
      component: TambahSiswa
    }
  ]
})
