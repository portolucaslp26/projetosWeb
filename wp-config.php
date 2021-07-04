<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'penger' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'd[Tz Y<%%]]afG:H/1QI6G_X#m+q&:94?t =?sd^yA(=31oc#kL~=t8oI}pmVWyL' );
define( 'SECURE_AUTH_KEY',  'd&V[aM`RL<V@vdRR93n84{54io+bV$D>srr#fVPQmW$+#Yrve2&.*K?,V@>iJ}vn' );
define( 'LOGGED_IN_KEY',    '<!ua>q#fMuM25cqj@1Rt*xLw&H6~jv|}`h%zwF0YPL<&=&(9`YNUDf_UV?0fT.X(' );
define( 'NONCE_KEY',        'aUs$W95AwQ>s/Pr6OvHih%Dc`%^#S.NLr+*`-6&}a<{h>!^SVTS+xdKaUZ,yk$~q' );
define( 'AUTH_SALT',        '3LbT?4<v4(e|ygK#6KL)UZ:|GKS(Q/>#la<.k Q;gMII*8)tc]+M6{&;!=<%%}9g' );
define( 'SECURE_AUTH_SALT', '1,S(.ile,<Wb!G8~KLwwf=uZ}G%iAH0i@d*m70o,Ui6R(db=n5:I j BR0Jsr~Hb' );
define( 'LOGGED_IN_SALT',   '] n4}a2N91;rzemQyKWyq~O`V1J&X;fPiN5VNv2(=mGl ,P{hU`2Y:Z1sbo4ys).' );
define( 'NONCE_SALT',       '}+P];Pqe.|1VQ:gVZ!XK$yL2q?;yrbuyq*Xl5refh2AJScvNWg^S,6P*hseusZF]' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
