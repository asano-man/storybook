import { storyOf } from '@storybook/vue'
import pageTitle from '../components/pageTitle.vue'

storiesOf('pageTitle', module)
.add('default', () => ({
  components: { pageTitle },
  template: '<pageTitle></pageTitle>'
}))
