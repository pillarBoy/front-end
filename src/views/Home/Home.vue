<template>
  <div class="home">
    <div class="home-top">
      <ag-header></ag-header>
      <ag-1200 class="home-content">
        <div class="flex-justify-center">
          	<h1>Aegis</h1>
          	<h3>DeFiner of DeFi 2.0</h3>
        </div>
        <h5>
          	Profitable DeFi Network for Diversified Lending
          	<br />Services & Lending-based Derivatives
        </h5>
      </ag-1200>
    </div>
	<div >
		 <ag-1200>
			<Introducing />
			<EarnProfits />
			<Dashboard />
			<Products />
		</ag-1200>
		<div v-if="false">
			<TeamMembers />
		</div>
		<Map />
		<ContactUs />

		<ag-footer></ag-footer>
	</div>
  </div>
</template>

<script>
import Introducing from "./components/Introducing"
import EarnProfits from "./components/EarnProfits.vue"
import Dashboard from "./components/Dashboard.vue"
import Products from "./components/Products.vue"
import TeamMembers from './components/TeamMembers'
import ContactUs from './components/ContactUs'
import Map from './components/Map'

export default {
	name: "Home",
  	components: {
		Introducing,
		EarnProfits,
		Dashboard,
		Products,
		TeamMembers,
		ContactUs,
		Map
	  },
	  data() {
		return  {
			
		}
	},
	mounted() {
		
	}
};
</script>

<style lang="scss">
.home-top {
	background: url("../../assets/imgs/top-bg.png") no-repeat center center;
	background-size: cover;

	.home-content {
		color: white;

		h3 {
			background: rgba(255, 255, 255, 0.15);
			color: #00dbfb;
			text-align: center;
		}

		h5 {
			padding-top: 10px;
			text-align: center;
			font-weight: 500;
			white-space: nowrap;
		}
	}
}
@media screen and (min-width: 1200px) {
	.home-top {
		height: 896px;
		
		.home-content {
			padding-top: 300px;
			color: white;

			h1 {
				margin-right: 26px;
				font-size: 120px;
				height: 120px;
				line-height: 94px;
				font-weight: 500;
				letter-spacing: 5px;
			}
			h3 {
				margin-top: 3px;
				padding: 0 39px;
				height: 90px;
				font-size: 60px;
				border-radius: 45px;
				line-height: 90px;
				font-weight: 400;
			}

			h5 {
				padding-top: 10px;
				text-align: center;
				font-size: 54px;
				font-weight: 500;
				white-space: nowrap;
				line-height: 90px;
			}
		}
	}
}

@media screen and (max-width: 1199px) {
	.home-top {
		height: 260px;

		.home-content{
			padding-top: 90px;

			h1 {
				font-size: 35px;
			}
			h3 {
				margin-top: 5px;
				margin-left: 10px;
				padding: 0 10px;
				height: 35px;
				line-height: 35px;
				font-size: 20px;
				border-radius: 17px;
			}
			h5 {
				margin-top: 10px;
				font-size: 12px;
				line-height: 1.6;
			}
		} 
	}
}

</style>
