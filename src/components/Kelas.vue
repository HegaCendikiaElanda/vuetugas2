<template>
	<div>
		<h1>Data Kelas</h1>
		<center>
			<table border="1">
				<tr>
					<td>No</td>
					<td>Id Kelas</td>
					<td>Nama Kelas</td>
					<td>Jurusan</td>
				</tr>
				<tr>
					<td>1</td>
					<td>1</td>
					<td>XII RPL 3</td>
					<td>Rekayasa Perangkat Lunak</td>
				</tr>
				<tr>
					<td>2</td>
					<td>1</td>
					<td>XII RPL 3</td>
					<td>Rekayasa Perangkat Lunak</td>
				</tr>
				<tr>
					<td>3</td>
					<td>1</td>
					<td>XII RPL 3</td>
					<td>Rekayasa Perangkat Lunak</td>
				</tr>
				<tr>
					<td>4</td>
					<td>1</td>
					<td>XII RPL 3</td>
					<td>Rekayasa Perangkat Lunak</td>
				</tr>
			</table>
			<router-link to="/kelas/tambah">Tambah Kelas</router-link>
			<router-view/>
		</center>
	</div>
</template>
<script>
	export default{
	}
</script>