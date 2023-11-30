import { TestBed } from '@angular/core/testing';
import { HeaderTabsComponent } from './header-tabs.component';
describe('HeaderTabsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderTabsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(HeaderTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=header-tabs.component.spec.js.map