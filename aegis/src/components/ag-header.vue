<template>
    <div class="ag-header" :class="{'header-bg':opt}">
		<ag1200>
			<div class="flex-between-center ag-header-content">
				<div class="flex"><img class="logo" src="../assets/imgs/top-logo.png" alt=""></div>
				<div class="flex">
					<div class="nav">
						<!-- <div class="nav-item"><a href="javascript:void(0)" @click="alert">Learn</a></div>-->
						<div class="nav-item"><a href="javascript:void(0)" @click="alert">Products</a></div>
						<!-- <div class="nav-item"><a href="javascript:void(0)" @click="alert">Developers</a></div>  -->
						<div class="nav-item"><a href="https://discord.com/invite/t5rW783" target="_blank">Contact Us</a></div>
						<div class="nav-item"><a href="javascript:void(0)" @click="alert">Earn Here</a></div>
					</div>
					<div class="earn-here"><a class="flex-center-center" :href="g_env_tokenscale" target="_blank">Tokensale&nbsp;&nbsp;<img src="../assets/imgs/jiantou.png" /></a></div>
				</div>
			</div>
		</ag1200>
    </div>
</template>

<script>
import ag1200 from './ag-1200'

export default {
	components: {ag1200},
	data() {
		return {
			opt: 0
		}
	},
	mounted() {
		window.addEventListener('scroll', this.scroll, false)
	},
	methods: {

		scroll() {
			if (document.documentElement.scrollTop>50) {
				this.opt = 1
			} else {
				this.opt = 0
			}
		}
	}
}
</script>

<style lang="scss">
	.ag-header {
		position: absolute;
		top: 25px;
		left: 0;
		right: 0;
		
		z-index: 3;
		color: rgba($color: #ffffff, $alpha: .8);
		font-size: 18px;
		
		.ag-header-content {
			text-transform: uppercase;
		}
		

		.logo {
			width: 119px;
			
		}

		.earn-here {
			margin-left: 98px;
			color: white;


			a {
				display: inline-block;
				width:140px;
				height:48px;
				line-height: 48px;
				background:rgba(0,42,255,1);
				border-radius:24px;
				font-size: 18px;
				text-align: center;
				text-transform: capitalize;
				color:#ffffff;
				text-decoration: none;

				img {
					width: 22px;
				}
			}
		}
		.nav {
			display: flex;
		}

		.nav-item {
			margin-left: 50px;
			padding-top: 17px;
			font-weight: 400;

			a {
				color: rgba($color: #ffffff, $alpha: .8);
				text-decoration: none;
				font-size: 18px;
				white-space: nowrap;
			}
		}
	}

	@media screen and (min-width: 1200px) {
		.ag-header {
			min-width: 1300px;
		}
	}

	@media screen and (max-width: 1199px) {
		.header-bg {
			background: #0A1538;
			box-shadow: 0 0 10px #0A1538;
		}
		.ag-header {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 3;
			padding: 10px 20px;

			

			.logo {
				width: 60px;
				height: 25px;
			}

			.nav {
				display: none;
			}
			.earn-here a {
				width: 100px;
				height: 30px;
				line-height: 30px;
				font-size: 14px;

				img {
					width: 14px;
				}
			}
		}
	}
</style>