import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import localforage from 'localforage';
import Home from '../screens/Home';
import { createStore } from 'polotno/model/store';
import Pamphlets from '../screens/Pamphlets';
import InformationResource from '../screens/InformationResource';

const store = createStore({ key: '1dhazL_sUsyRbsXfvCai' });
window.store = store;

localforage.getItem('polotno-state', function (err, json) {
  if (json) {
    store.loadJSON(json);
  }
  if (!store.pages.length) {
    store.addPage();
  }
});

store.on('change', () => {
  try {
    const json = store.toJSON();
    localforage.setItem('polotno-state', json);
  } catch (e) {}
});

const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit egestas dui id ornare arcu odio ut sem nulla. A cras semper auctor neque. Blandit libero volutpat sed cras. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Massa massa ultricies mi quis hendrerit dolor. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Morbi tristique senectus et netus et malesuada. Accumsan sit amet nulla facilisi morbi tempus iaculis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Laoreet sit amet cursus sit amet dictum sit amet justo. Sed viverra tellus in hac habitasse platea. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Lacus luctus accumsan tortor posuere ac ut consequat. Proin sagittis nisl rhoncus mattis",
    "Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Eget gravida cum sociis natoque penatibus et magnis. Integer enim neque volutpat ac tincidunt vitae semper quis. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Nec ultrices dui sapien eget mi. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Pellentesque habitant morbi tristique senectus. Ac turpis egestas integer eget aliquet. Ridiculus mus mauris vitae ultricies leo. Massa sapien faucibus et molestie.",
    "Duis ultricies lacus sed turpis tincidunt id aliquet. Nibh praesent tristique magna sit amet purus gravida quis blandit. Sit amet volutpat consequat mauris nunc congue nisi vitae. Duis ut diam quam nulla porttitor massa. Enim nulla aliquet porttitor lacus. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. In arcu cursus euismod quis viverra nibh cras. Elit duis tristique sollicitudin nibh. Nunc aliquet bibendum enim facilisis. Nibh cras pulvinar mattis nunc sed. Elementum integer enim neque volutpat ac tincidunt vitae. Turpis egestas pretium aenean pharetra. Duis ut diam quam nulla porttitor massa id. Mollis nunc sed id semper risus in hendrerit. Imperdiet sed euismod nisi porta lorem. Eu augue ut lectus arcu bibendum at varius vel pharetra.",
    "Amet justo donec enim diam vulputate ut pharetra sit. Orci eu lobortis elementum nibh tellus molestie nunc. Nisi vitae suscipit tellus mauris a diam maecenas. Ut lectus arcu bibendum at varius vel pharetra. Ut tortor pretium viverra suspendisse potenti nullam ac. Nec ullamcorper sit amet risus nullam. Sit amet risus nullam eget felis eget nunc lobortis mattis. Aliquet bibendum enim facilisis gravida. At auctor urna nunc id cursus. Orci phasellus egestas tellus rutrum. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Luctus accumsan tortor posuere ac ut consequat. Tempor nec feugiat nisl pretium.",
    "Quis auctor elit sed vulputate. Leo urna molestie at elementum eu facilisis sed odio morbi. Quis eleifend quam adipiscing vitae proin. Pellentesque eu tincidunt tortor aliquam. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Vitae tortor condimentum lacinia quis. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Diam maecenas sed enim ut sem. Elementum curabitur vitae nunc sed velit. In mollis nunc sed id. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Augue ut lectus arcu bibendum."
];

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/pamphlets' element={<Pamphlets store={store} />} />
                <Route
                    path='/informationResource'
                    element={
                        <InformationResource
                            title="This is the Title Prop"
                            subtitle="this is the subtitle"
                            paragraphs={paragraphs}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;