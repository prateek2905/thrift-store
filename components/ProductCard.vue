<template>
    <div>
        <div class="product-box">
            <div class="img"><slot name="img"></slot></div>
            <div class="info">
                <div class="info-left"><slot name="info-left"></slot></div>
                <div class="info-right"><slot name="info-right"></slot></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.product-box {
    background-color: #252a33;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 20px;
    height: 100%;
    padding: 1.65%;
    font-size: 30px;
    box-shadow: 2px 2px 15px 2px grey;
}

.product-box:hover {
    transition: 500ms;
    box-shadow: 2px 2px 15px 6px grey;
}

.info {
	font-size: 20px;
	display: flex;
	flex-direction: column;
	flex: 1;
	color: #ffeba7;
    font-weight: 750;
    align-content: stretch;
    justify-content: space-evenly;
	flex-wrap: wrap;
	padding-top: 2%;
}

.info-left {
	/* align-self:flex-start; */
	text-overflow: ellipsis;
	overflow: hidden;
	align-self: flex-start;
	display: grid;
	grid-template-rows: auto auto;
	padding-inline: 10px;
}

.info-right {
	align-self: flex-end;
	padding-inline: 10px;
}

</style>
