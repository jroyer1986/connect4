import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SpaceComponent } from './space/space.component';
import { GameComponent } from './game/game.component';
import { UserFormComponent } from './users/users-form.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BoardComponent, SpaceComponent, GameComponent, UserFormComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}