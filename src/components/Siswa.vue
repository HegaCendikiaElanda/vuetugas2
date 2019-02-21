<template>
	<div>
		<h1>Data Siswa</h1>
		<center>
			<table border="1">
				<tr>
					<td>No</td>
					<td>NIS</td>
					<td>Nama Siswa</td>
					<td>Kelas</td>
				</tr>
				<tr>
					<td>1</td>
					<td>1617116750</td>
					<td>Jajang Jaratat</td>
					<td>XII RPL 3</td>
				</tr>
				<tr>
					<td>2</td>
					<td>1617116750</td>
					<td>Jajang Jaratat</td>
					<td>XII RPL 3</td>
				</tr>
				<tr>
					<td>3</td>
					<td>1617116750</td>
					<td>Jajang Jaratat</td>
					<td>XII RPL 3</td>
				</tr>
				<tr>
					<td>4</td>
					<td>1617116750</td>
					<td>Jajang Jaratat</td>
					<td>XII RPL 3</td>
				</tr>
				<tr>
					<td>5</td>
					<td>1617116750</td>
					<td>Jajang Jaratat</td>
					<td>XII RPL 3</td>
				</tr>
			</table>
			<router-link to="/siswa/tambah">Tambah Kelas</router-link>
			<router-view/>
		</center>
	</div>
</template>
<script>
	export default{
	}
</script>