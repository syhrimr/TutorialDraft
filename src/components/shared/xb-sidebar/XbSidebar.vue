<template>
  <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              v-ripple
              clickable
              @click.prevent="itemClicked(menuItem.label)"
              :active="isActive"
              active-class="bg-teal-1 text-grey-8"
            >
              <q-item-section v-if="menuItem.icon" avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                <router-link
                  class="text-black text-bold"
                  style="text-decoration: none;"
                  :to="{ path: menuItem.path }">
                    {{ menuItem.label }}
                </router-link>
              </q-item-section>
            </q-item>
            <q-separator v-if="menuItem.separator"  :key="'sep' + index" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
</template>

<script>
export default {
  name: "XbSidebar",
  data() {
    return {
      menuList: [
        {
          label: 'Home',
          separator: true,
          path: '/'
        },
        {
          label: 'Simple Table',
          separator: false,
          path: '/simple-table'
        },
        {
          label: 'Selection Table',
          separator: false,
          path: '/selection-table'
        },
        {
          label: 'Slot Table',
          separator: false,
          path: '/slot-table'
        }
      ],
      drawer: false,
      isActive: false
    }
  },
  methods: {
    itemClicked(label) {
      console.log(label)
      return label === this.$route.name
    }
  }
};
</script>
