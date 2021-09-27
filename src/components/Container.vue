<template>
	<article class="article1">
		<div class="reveal-left">
			<span class="spanUi">ئازادە مۇھىت</span>
			<br />
			<span class="spanZh">舒适环境</span>
		</div>
		<van-image width="20rem" fit="contain" :src="require('../assets/images/cont1.jpg')" class="reveal-right" />
	</article>

	<article class="article2">
		<van-image width="20rem" fit="contain" :src="require('../assets/images/cont3.jpg')" class="reveal-left" />
		<div class="reveal-right">
			<span class="spanUi">ئىسىل تەم</span>
			<br />
			<span class="spanZh">人间美味</span>
		</div>
	</article>

	<article class="article3">
		<div class="reveal-bottom">
			<span class="spanUi">زامانىۋىلىق ۋە مەدەنىيەت</span>
			<br />
			<span class="spanZh">现代化与文明的结合</span>
		</div>
		<van-image width="25rem" fit="contain" :src="require('../assets/images/cont2.jpg')" class="reveal-top" />
	</article>

	<article class="article4">
		<div class="reveal-bottom">
			<span class="spanUi">ھوزۇر</span>
			<br />
			<span class="spanZh">享受</span>
		</div>
		<van-image width="20rem" fit="contain" :src="require('../assets/images/cont4.jpg')" class="reveal-top" />
		<br />
		<span class="ui">
			بىر ئىستىكان قەھۋە ، كىشىلىك ھاياتىنى گۈزەللەشتۈرىدۇ
			<br />
			ياخشى كەيپىيات تۈمەن يىللىق دۇنيانى يىشەلەيدۇ
		</span>
		<br />
		<span class="zh">一杯咖啡，品人生沉浮；平常心，透万千世界</span>
	</article>

	<article class="article5" style="direction:rtl">
		<span class="ui">
			كۈنلەر 
			<br />
			ياكى سەۋىر ياكى كۈتۈشتۇر 
			<br />
			چاي بىلەن كۆڭۈلنى تىندۇرۇپ 
			<br />
			خاتىرجەم ياشىغانغا يەتمەس
			<br />
			كۈرەش
			<br />
			ياكى سەۋىر ياكى كۈتۈشتۇر 
			<br />
			چاي بىلەن قەلىبگە ھۆرمەت قىلىپ
			<br />
			كۆڭۈلنى كېڭەيتكەنگە يەتمەس
			<br />
			مۇھەببەت
			<br />
			ياكى سەۋىر ياكى كۈتۈشتۇر 
			<br />
			چاي بىلەن كۆڭۈلنى يۇيۇپ
			<br />
			مۇھەببەتنى چىنلىغانغا يەتمەس
			<br />
			ھايات
			<br />
			ياكى سەۋىر ياكى كۈتۈشتۇر 
			<br />
			چاي بىلەن نىيەتنى پاكلاپ
			<br />
			ساپ ياشىغانغا يەتمەس
		</span>
	</article>

	<article class="article5">
		<span class="zh">
			日子，
			<br />
			不是忍耐，就是等待。
			<br />
			不如以茶静心，过得从容。
			<br />
			奋斗，
			<br />
			不是忍耐，就是等待。
			<br />
			不如以茶敬心，赢得坦荡。
			<br />
			爱情，
			<br />
			不是忍耐，就是等待。
			<br />
			不如以茶净心，爱得真洁。
			<br />
			人生，
			<br />
			不是忍耐，就是等待。
			<br />
			不如以茶尽心，活得纯粹。
		</span>
	</article>

</template>

<style>
	.spanUi {
		color: #FFFFFF;
		font-size: 1.2rem;
		font-family: ALKATIP_Yazma;
	}

	.spanZh {
		color: #FFFFFF;
		font-size: 1rem;
	}

	.ui {
		font-family: ALKATIP_Kufi;
		color: #FFFFFF;
	}

	.zh {
		color: #FFFFFF;
		font-family: "楷体";
	}

	.article1 {
		margin-top: 4rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.article2 {
		margin-top: 5rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.article3 {
		margin-top: 5rem;
	}

	.article4 {
		margin-top: 5rem;
	}

	.article5 {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		padding-top: 30vh;
		font-size: 1.3rem;
	}
</style>
