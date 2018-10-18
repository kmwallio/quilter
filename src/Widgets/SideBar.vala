/*
* Copyright (c) 2018 Lains
*
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public
* License as published by the Free Software Foundation; either
* version 2 of the License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
* General Public License for more details.
*
* You should have received a copy of the GNU General Public
* License along with this program; if not, write to the
* Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
* Boston, MA 02110-1301 USA
*/
namespace Quilter.Widgets {
    public class SideBar : Gtk.Revealer {
        public Gtk.ListBox column;
        public Widgets.SideBarBox row;
        public Widgets.EditView ev;

        public SideBar () {
            var settings = AppSettings.get_default ();
            column = new Gtk.ListBox ();
            var sb_context = column.get_style_context ();
            sb_context.add_class ("quilter-sidebar");
            column.hexpand = false;
            column.vexpand = true;
            column.activate_on_single_click = true;
            column.selection_mode = Gtk.SelectionMode.SINGLE;
            column.set_sort_func (list_sort);
            add_task ();
            column.row_activated.connect (() => {
                if (row.is_selected ()) {
                    string text;
                    string file_path = settings.last_file[0];
                    var file = File.new_for_path (file_path);
                    string filen = file.get_path ();
                    GLib.FileUtils.get_contents (filen, out text);
                    if (ev != null) {
                        Widgets.EditView.buffer.text = text;
                    }
                }
            });
            column.show_all ();

            this.transition_type = Gtk.RevealerTransitionType.SLIDE_LEFT;
            this.add (column);
        }

        public void add_task () {
            var taskbox = new SideBarBox ();
            column.insert (taskbox, -1);
        }

        public int list_sort (Gtk.ListBoxRow first_row, Gtk.ListBoxRow second_row) {
            var row_1 = first_row;
            var row_2 = second_row;

            string name_1 = row_1.name;
            string name_2 = row_2.name;

            return name_1.collate (name_2);
        }
    }
}