'use strict';

const e = React.createElement;

class Footer extends React.Component {
    render() {
        return e(
            <div class="inner">
			<section>
				{/* <!-- Social Media Links --> */}
				<div class="inner">
					<header class="align-center">
						<h2>Social Media</h2>
						<p>Find us on all your favorite platforms</p>
						<ul class="icons">
                        
							<li><a href="https://www.facebook.com/hempireinnovations/" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
							<li><a href="https://www.instagram.com/hempireinnovations/" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
							<li><a href="#" class="icon fa-youtube-play"><span class="label">YouTube</span></a></li>
							<li><a href="/blog.html" class="icon fa-book"><span class="label">Blog</span></a></li>
						</ul>
					</header>
				</div>
			</section>
			<div class="copyright align-center">
				<p>&copy; Made with care by <a href="https://qgbyipzk.pw/">Trésor</a>.
					<a href="https://github.com/tresor-llc" class="icon fa-github"></a></p>
			</div>
		</div>

        );
    }
}

const innerSection = e(
    'div',
    null,
    `This react has loaded properly`
);



const dom = document.querySelector('#footer');

ReactDOM.render(e(Footer), dom);