import { TestBed } from '@angular/core/testing';
import { IdsLoadingIndicatorComponent } from './ids-loading-indicator.component';
describe('IdsLoadingIndicatorComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IdsLoadingIndicatorComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(IdsLoadingIndicatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ids-loading-indicator.component.spec.js.map