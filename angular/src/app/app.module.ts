import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { ChatComponent } from './components/chat/chat.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BackIcon } from './components/icons/back/back.component';
import { GithubIcon } from './components/icons/github/github.component';
import { LinkIcon } from './components/icons/link/link.component';
import { LinkedinIcon } from './components/icons/linkedin/linkedin.component';
import { MonospaceIcon } from './components/icons/monospace/monospace.component';
import { TwitterIcon } from './components/icons/twitter/twitter.component';
import { YoutubeIcon } from './components/icons/youtube/youtube.component';
import { InfoComponent } from './components/info/info.component';
import { MoreArticlesComponent } from './components/more-articles/more-articles.component';
import { NoticeComponent } from './components/notice/notice.component';
import { GetAssetUrlPipe } from './get-asset-url.pipe';
import { ArticlePage } from './pages/article/article.component';
import { HomePage } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent,
    HeaderComponent,
    InfoComponent,
    FooterComponent,
    HeroComponent,
    ArticleComponent,
    MoreArticlesComponent,
    MonospaceIcon,
    GithubIcon,
    YoutubeIcon,
    LinkedinIcon,
    TwitterIcon,
    BackIcon,
    LinkIcon,
    HomePage,
    ArticlePage,
    GetAssetUrlPipe,
    ChatComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
