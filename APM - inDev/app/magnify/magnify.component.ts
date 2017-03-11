import { Component } from '@angular/core';


@Component({
    selector : 'mgnfy-btn',
    moduleId : module.id,
    templateUrl : 'magnify.component.html'
})

export class MagnifyComponent{


    onMagnifyClick() : void {
        `<script type="text/javascript" src="Event.js"></script>
            <script type="text/javascript" src="Magnifier.js"></script>
            <script type="text/javascript">
            var evt = new Event(),
            m = new Magnifier(evt);
        </script>`
    }
}