<?php
/*
 * Plugin Name:       Block Dev Plugin
 * Description:       Desenvolvimento de Plugin utilizando React | blocos personalizados.
 * Version:           1.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Jonathan Santos
 * Text Domain:       block-dev-plugin
 */

 if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// Setup
define('UP_PLUGIN_DIR', plugin_dir_path(__FILE__));

// Includes
include(UP_PLUGIN_DIR . 'includes/register-blocks.php');

// Hooks
add_action('init', 'up_register_blocks');
