import { TestBed } from '@angular/core/testing';
import { IdsAboutComponent } from './ids-about.component';
describe('IdsAboutComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsAboutComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsAboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-about.component.spec.js.map