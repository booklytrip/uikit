import { configure } from '@storybook/react';

// Load semantic-ui stylesheets
import 'semantic-ui-css/semantic.min.css';

function loadStories() {
    require('../src/components/stories/Avatar');
    require('../src/components/stories/Counter');
    // require('../src/components/stories/AirportSelect');
    require('../src/components/stories/EllipsisLoader');
    require('../src/components/stories/Checkbox');
    require('../src/components/stories/CheckboxList');
    require('../src/components/stories/Tab');
    require('../src/components/stories/Calendar');
    require('../src/components/stories/Slider');
}

configure(loadStories, module);
