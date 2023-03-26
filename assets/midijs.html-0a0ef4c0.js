import{_ as s,M as a,p as d,q as l,Q as t,t as e,N as o,V as h,a1 as n}from"./framework-2ecd7faa.js";const c={},u=n('<h1 id="midi-js-usage" tabindex="-1"><a class="header-anchor" href="#midi-js-usage" aria-hidden="true">#</a> MIDI.JS Usage</h1><h2 id="midi-js-removed" tabindex="-1"><a class="header-anchor" href="#midi-js-removed" aria-hidden="true">#</a> Midi.js removed</h2><p>The last version supporting this interface is 6.0.0-beta.28.</p><h2 id="notes-for-version-5-8-0" tabindex="-1"><a class="header-anchor" href="#notes-for-version-5-8-0" aria-hidden="true">#</a> Notes for Version 5.8.0</h2><p>This way of creating midi is being deprecated by a new method that is much smaller, less buggy and integrates with the TimingCallbacks object. This will continue to work for the forseeable future, but probably won&#39;t change much.</p>',5),p=n('<h2 id="notes-for-version-3-0-beta" tabindex="-1"><a class="header-anchor" href="#notes-for-version-3-0-beta" aria-hidden="true">#</a> Notes for Version 3.0 Beta</h2><p>There are a number of features described below that are not yet activated. This release is primarily to get the main MIDI functionality working. Here is a list of features you can look forward to in upcoming versions:</p><ul><li><p>Changing the instrument and channel in the midi file: right now, one channel is used, and the instrument is Grand Piano.</p></li><li><p>Changing the tempo is not available.</p></li><li><p>The listener doesn&#39;t return much information: look for much more to come.</p></li><li><p>The &quot;play selection&quot; functionality is not implemented.</p></li><li><p>The &quot;bouncing ball&quot; functionality is not implemented.</p></li></ul><h2 id="midi-generation-in-abcjs" tabindex="-1"><a class="header-anchor" href="#midi-generation-in-abcjs" aria-hidden="true">#</a> MIDI generation in ABCJS</h2>',4),m={href:"https://github.com/mudcube/MIDI.js",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/paulrosen/midi-js-soundfonts",target:"_blank",rel:"noopener noreferrer"},b=n('<h2 id="site-setup" tabindex="-1"><a class="header-anchor" href="#site-setup" aria-hidden="true">#</a> Site Setup</h2><ul><li><p>Use the version of the library that contains midi.js.</p></li><li><p>The soundfonts, by default, are served from github. If you would like host them yourself, put them on your server in a publicly accessible place and call:</p></li></ul><p><code>window.ABCJS.midi.setSoundFont(&quot;/url/to/soundfont/&quot;);</code></p><p>The trailing slash is required.</p><p>There is also some CSS required to make the MIDI control look right. You can use the example CSS in this repository and modify it to match your site. The example CSS uses Font Awesome. Include these two lines:</p><p><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css&quot;&gt;</code><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;abcjs-midi.css&quot; media=&quot;all&quot; type=&quot;text/css&quot; /&gt;</code></p><h2 id="creating-the-midi" tabindex="-1"><a class="header-anchor" href="#creating-the-midi" aria-hidden="true">#</a> Creating the MIDI</h2><p>After doing the above steps to load the CSS and the sound fonts, the simplest way to produce the MIDI is:</p><p><code>window.ABCJS.renderMidi(&quot;id-of-div-to-place-midi-controls&quot;, abcString, {}, { generateInline: true }, {});</code></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',10),g={href:"/examples/editor-midi.html",target:"_blank",rel:"noopener noreferrer"},_={href:"/examples/printable.html",target:"_blank",rel:"noopener noreferrer"};function y(x,w){const r=a("RouterLink"),i=a("ExternalLinkIcon");return d(),l("div",null,[u,t("p",null,[e("See "),o(r,{to:"/audio/synthesized-sound.html"},{default:h(()=>[e("Synth Documentation")]),_:1}),e(" for details.")]),p,t("p",null,[e("There are two ways to generate MIDI: as a download link, and as an inline control. The download link method is built into ABCJS. The inline control, though, depends on the external library "),t("a",m,[e("MIDI.js"),o(i)])]),t("p",null,[e("That, in turn, is dependent on a set of sound fonts. A good place to get them is "),t("a",f,[e("MIDI.js Soundfonts"),o(i)])]),b,t("p",null,[e("See the examples in this repository. They contain the prerequisite files. "),t("a",g,[e("Editor"),o(i)]),e(", "),t("a",_,[e("Printable"),o(i)]),e(".")])])}const q=s(c,[["render",y],["__file","midijs.html.vue"]]);export{q as default};
