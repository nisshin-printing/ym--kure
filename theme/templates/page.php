<?php
	$home = 'https://www.law-yamashita.com/';
	$sozoku = 'https://hiroshima-sozoku.com/';
	$url = ( $isSozoku ) ? $sozoku : $home;
	$url = "{$url}wp-json/wp/v2/pages/{$page_id}";
	$json = file_get_contents( $url );
	$json = json_decode( $json, true );

	$content = $json['content']['rendered'];
	echo $content;
