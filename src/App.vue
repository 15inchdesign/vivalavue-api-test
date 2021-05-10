<template>
<div>
 <custom-header/>
 <custom-footer/>
</div>
</template>
<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'Home',
  components: {
    'custom-header': Header,
    'custom-footer': Footer
  }
}
</script>
