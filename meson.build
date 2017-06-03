# Name our project
project('com.github.lainsce.quilter', ['vala', 'c'],
    version: '0.1.0'
)

# Import main lib files
gnome = import('gnome')
i18n = import('i18n')

# Set this for convenience
conf = configuration_data()

# Get the package data directory under Meson
pkgdatadir = join_paths([ get_option('prefix'),
                          get_option('datadir'),
                          'com.github.lainsce.quilter' ])

conf.set_quoted('PKGDATADIR', pkgdatadir)

# Other configs
conf.set_quoted('GETTEXT_PACKAGE', meson.project_name())
conf
add_global_arguments('-DDATADIR="' + get_option('datadir') + '"', language: 'c')
configure_file(output: 'config.h', configuration: conf)
config_h_dir = include_directories('.')

# Arguments for C
c_args = [
  '-include', 'config.h',
  '-w'
]

cc = meson.get_compiler('c')
m_dep = cc.find_library('m', required : false)

# Let's define our executable
executable(
    meson.project_name(),
    'src/Application.vala',
    'src/MainWindow.vala',
    'src/Widgets/Toolbar.vala',
    'src/Widgets/SourceView.vala',
    'src/Constants/Stylesheet.vala',
    'src/Constants/AppSettings.vala',
    'src/Utils/FileUtils.vala',
    'src/Utils/DialogUtils.vala',
    c_args: c_args,
    dependencies: [
        dependency('granite'),
        dependency('gobject-2.0'),
        dependency('gtksourceview-3.0'),
        dependency('gtk+-3.0'),
        m_dep
    ],
    vala_args: [
        meson.source_root() + '/vapi/config.vapi',
        '--vapidir=' + meson.source_root() + '/vapi/',
    ],
    install : true
)

# Add in a post install script
meson.add_install_script('meson/post_install.py')

# Add subfolders for Meson to look
subdir('data')
subdir('po')